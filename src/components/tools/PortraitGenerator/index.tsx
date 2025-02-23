import React, { useState, useEffect } from 'react'

import CharSelector from './CharSelector'
import Preview from './Preview'

import { findFuzzyBestCandidates } from '@site/src/utils/fuzzy'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'
import { CheckboxInput } from '../../common/input/CheckboxInput'
import filename from '@site/src/utils/filename'

import '../../../css/custom.css'
export interface PortraitIcon {
  name: string
  path: string
  full?: boolean
  elementalIcon?: {
    name: string
    path: string
  }
  note?: string
  others?: PortraitIcon[]
}

const elements = [{
  name: "Anemo",
  path: "/portrait-chibi/img/elements/anemo.png",
}, {
  name: "Cryo",
  path: "/portrait-chibi/img/elements/cryo.png",
}, {
  name: "Dendro",
  path: "/portrait-chibi/img/elements/dendro.png",
}, {
  name: "Electro",
  path: "/portrait-chibi/img/elements/electro.png",
}, {
  name: "Geo",
  path: "/portrait-chibi/img/elements/geo.png",
}, {
  name: "Hydro",
  path: "/portrait-chibi/img/elements/hydro.png",
}, {
  name: "Pyro",
  path: "/portrait-chibi/img/elements/pyro.png"
}]

const travelers = [{
  name: "Aether",
  path: "/portrait-chibi/img/characters/icon/Aether.png",
}, {
  name: "Lumine",
  path: "/portrait-chibi/img/characters/icon/Lumine.png",
}]
const localStorageKey = "portrait-generator-custom-icons"

export default function PortraitGenerator({
  charIcons, artiIcons, weaponIcons
}: {
  charIcons: Record<string, string[]>,
  artiIcons: Record<string, string[]>,
  weaponIcons: Record<string, string[]>
}) {
  const [active, setActive] = useState([{
    name: "Jake",
    path: `/portrait-chibi/img/characters/icon/Jake.png`,
    note: "C2+"
  }] as PortraitIcon[])
  const [custom, setCustom] = useState([] as PortraitIcon[])
  const [background, setBackground] = useState(true)
  const [portraitPadding, setPortraitPadding] = useState(true)
  const [names, setNames] = useState(false)
  const [search, setSearch] = useState("")

  const iconsMisc = [
    {
      name: "Flex slot",
      path: "/portrait-chibi/img/characters/Flex.png",
    },
    ...travelers
  ]

  const iconsChar = Object.entries(charIcons).sort((a, b) => a[0].localeCompare(b[0])).map(([element, icons]) => ({
    element,
    chars: icons.sort().map(name => ({
      name,
      path: `/portrait-chibi/img/characters/icon/${filename(name)}.png`
    })),
    travelerIcons: elements.filter(x => x.name == element).flatMap(relevant => travelers.map(traveler => ({
      ...traveler,
      name: `${traveler.name} (${relevant.name})`,
      elementalIcon: relevant
    })))
  }))

  const iconsArtifacts = Object.entries(artiIcons).sort((a, b) => a[0].localeCompare(b[0])).map(([level, icons]) => ({
    level,
    icons: icons.map(name => ({
      name,
      path: `/portrait-chibi/img/artifacts/icon/${filename(name)}.png`,
      full: true
    }))
  }))

  const iconsWeapons = Object.entries(weaponIcons).sort((a, b) => a[0].localeCompare(b[0])).map(([type, icons]) => ({
    type,
    icons: icons.map(name => ({
      name,
      path: `/portrait-chibi/img/weapons/icon_ascended/${filename(name)}.png`,
      // full: true
    }))
  }))

  const allIcons: PortraitIcon[] = [
    ...iconsChar.flatMap(x => [...x.chars, ...x.travelerIcons]),
    ...elements,
    ...iconsArtifacts.flatMap(x => x.icons),
    ...iconsWeapons.flatMap(x => x.icons),
    ...iconsMisc,
    ...custom
  ]

  const matches = findFuzzyBestCandidates(allIcons.map(x => x.name), search, 8)
  const searchMatches = search.length == 0 ? [] : matches.flatMap(m => allIcons.filter(x => m == x.name)).filter((v, i, a) => a.indexOf(v) == i)

  function add(icon: PortraitIcon, multi: boolean, note: boolean) {
    if (note) {
      const note = prompt("Note text", "C1+")
      icon = {
        ...icon,
        note
      }
    }
    if (multi) {
      if (!active[active.length - 1]) {
        setActive([icon])
        return
      }
      const last = Object.assign({}, active[active.length - 1])
      if (!last.others) last.others = []
      if (last.others.length < 3) {
        last.others.push(icon)
        setActive([...active.slice(0, active.length - 1), last])
        return
      }
    }
    if (active.length < 8)
      setActive([...active, icon])
  }
  function pop() {
    const last = active[active.length - 1]
    if (last.others) {
      last.others.pop()
      if (last.others.length == 0)
        delete last.others
    } else
      active.pop()
    setActive([...active])
  }

  return <div>
    <Preview
      active={active}
      remove={(i: number) => setActive([...active.slice(0, i), ...active.slice(i + 1)])}
      background={background}
      portraitPadding={portraitPadding}
      names={names}
    />

    <label>
      Quick input: <input type="text" value={search} onChange={e => setSearch(e.target.value)} onKeyDown={e => {
        if (e.key == "Enter" && searchMatches.length > 0) {
          add(searchMatches[0], e.shiftKey, e.altKey)
          setSearch("")
          return
        }
        console.log(e)
        if (e.key == "Backspace" && e.shiftKey && search.length == 0 && active.length > 0) {
          pop()
        }
      }} />
    </label> (Enter to add, Shift+Enter to add to multi, Shift+Backspace on empty search bar to pop last addition)
    <div>
      {searchMatches.length > 0 && <CharSelector
        icons={searchMatches}
        onClick={add}
      />}
    </div>

    <h2>Characters</h2>
    <Tabs>
      {iconsChar.map(({ element, chars, travelerIcons }) => {
        return <TabItem key={element} value={element} label={element}>
          <CharSelector
            icons={chars}
            onClick={add}
          />
          {travelerIcons?.length > 0 && <CharSelector
            icons={travelerIcons}
            onClick={add}
          />}
        </TabItem>
      })}
    </Tabs>

    <h2>Elements</h2>
    <CharSelector icons={elements} onClick={add} />

    <h2>Artifacts</h2>
    <Tabs>
      {iconsArtifacts.map(({ level, icons }) => {
        return <TabItem key={level} value={level} label={level + "★"}>
          <CharSelector
            icons={icons}
            onClick={add}
          />
        </TabItem>
      })}
    </Tabs>

    <h2>Weapons</h2>
    <Tabs>
      {iconsWeapons.map(({ type, icons }) => {
        return <TabItem key={type} value={type} label={type}>
          <CharSelector
            icons={icons}
            onClick={add}
          />
        </TabItem>
      })}
    </Tabs>

    <h2>Misc</h2>
    <CharSelector icons={iconsMisc} onClick={add} />

    {custom.length > 0 && <>
      <h2>Custom</h2>
      <CharSelector icons={custom} onClick={add} onCtrlClick={icon => {
        if (!confirm(`Are you sure you want to delete ${icon.name}`))
          return
        setCustom(custom.filter(x => x != icon))
      }} />
    </>}

    <h2>Settings</h2>
    <label>
      Use background: <CheckboxInput set={setBackground} value={background} />
    </label> <br/>
    <label>
      Portrait padding: <CheckboxInput set={setPortraitPadding} value={portraitPadding} />
    </label> <br/>
  </div>
}