import React, { FC } from 'react'
import { render } from 'react-dom'

// loadable
import Loadable from '@loadable/component'

// router
import { BrowserRouter } from 'react-router-dom'

const App = Loadable(() => import('./App'))

const Root: FC = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

render(<Root />, document.getElementById('root'))
