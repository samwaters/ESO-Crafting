import * as React from 'react'
import { Tab, Tabs } from '@material-ui/core'
import { Creator } from './creator'
import { Poisons } from './poisons'
import { Potions } from './potions'
import { a11yProps } from '../tabs/a11y'
import { TabPanel } from '../tabs/tabpanel'

export const AlchemyComponent: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return <>
    <Tabs value={value} onChange={handleChange} aria-label="Alchemy">
      <Tab label="Alchemy Creator" {...a11yProps(0)} />
      <Tab label="Common Potions" {...a11yProps(1)} />
      <Tab label="Common Poisons" {...a11yProps(2)} />
    </Tabs>
    <TabPanel value={value} index={0}>
      <Creator />
    </TabPanel>
    <TabPanel value={value} index={1}>
      <Potions />
    </TabPanel>
    <TabPanel value={value} index={2}>
      <Poisons />
    </TabPanel>
  </>
}
