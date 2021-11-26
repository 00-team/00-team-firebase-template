import React, { FC } from 'react'

interface AppProps {}

const defaultProps: AppProps = {}

const App: FC = () => {
    return <div>App...</div>
}

App.defaultProps = defaultProps

export default App
