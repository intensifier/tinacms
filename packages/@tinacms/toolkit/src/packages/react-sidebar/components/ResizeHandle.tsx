/**

Copyright 2021 Forestry.io Holdings, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

import * as React from 'react'
import { minSidebarWidth, SidebarContext } from './Sidebar'

export const ResizeHandle = () => {
  const {
    resizingSidebar,
    setResizingSidebar,
    fullscreen,
    setSidebarWidth,
    displayState,
  } = React.useContext(SidebarContext)

  React.useEffect(() => {
    const handleMouseUp = () => setResizingSidebar(false)

    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  React.useEffect(() => {
    const handleMouseMove = (e: any) => {
      setSidebarWidth((sidebarWidth) => {
        /* Get value from CSS if sidebarWidth isn't set yet */
        const newWidth = sidebarWidth + e.movementX
        const maxWidth = window.innerWidth - 8

        if (newWidth < minSidebarWidth) {
          return minSidebarWidth
        } else if (newWidth > maxWidth) {
          return maxWidth
        } else {
          return newWidth
        }
      })
    }

    if (resizingSidebar) {
      window.addEventListener('mousemove', handleMouseMove)
      document.body.classList.add('select-none')
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.classList.remove('select-none')
    }
  }, [resizingSidebar])

  const handleresizingSidebar = () => setResizingSidebar(true)

  if (fullscreen) {
    return null
  }

  return (
    <div
      onMouseDown={handleresizingSidebar}
      className={`z-100 absolute top-1/2 right-0 w-3 h-32 rounded-l-md border transition-all duration-150 ease-out transform -translate-y-1/2 group ${
        displayState !== 'closed' ? `opacity-100` : `opacity-0`
      } ${resizingSidebar ? `scale-110` : ``}`}
      style={{ cursor: 'grab' }}
    ></div>
  )
}
