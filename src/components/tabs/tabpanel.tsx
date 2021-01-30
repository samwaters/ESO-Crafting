import * as React from 'react'

interface TabPanelProps {
  index: number
  value: number
}

export const TabPanel: React.FunctionComponent<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props

  return <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    { value === index && <>{children}</> }
  </div>
}
