import React from 'react'
import Master from '../components/Master'
import SearchBar from '../components/SerachBar'
import PropertiesPanel from '../components/PropertiesPanel'

export default function Home() {
  return (
    <Master>
      <SearchBar />
      <PropertiesPanel />
    </Master>
  )
}
