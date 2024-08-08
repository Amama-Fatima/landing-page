'use client'

import { ReactLenis } from "@studio-freight/react-lenis";
import React from 'react'
import StyledComponentsRegistry from '../../lib/registry'

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
      <ReactLenis root easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </ReactLenis>
    )
  }
  

export default Layout