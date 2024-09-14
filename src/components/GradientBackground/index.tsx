'use client'

import React, { useEffect, useRef } from 'react'
import Granim from 'granim'

interface GradientBackgroundProps {
  gradients: string[][];
}

/**
 * Grandient background component using granim.
 *
 * @see https://sarcadass.github.io/granim.js/
 */
const GradientBackground: React.FC<GradientBackgroundProps> = ( { gradients } ) => {
  const granimRef = useRef<Granim | null>( null )
  const canvasRef = useRef<HTMLCanvasElement | null>( null )

  /**
   * Load gradients into default state.
   */
  useEffect( () => {
    if ( canvasRef.current ) {
      granimRef.current = new Granim( {
        element: canvasRef.current,
        name: 'interactive-gradient',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        stateTransitionSpeed: 0,
        states: {
          'default-state': {
            gradients: gradients,
            loop: false,
          },
        },
      } )
    }

    return () => {
      granimRef.current?.destroy()
    }
  }, [gradients] )

  /**
   * Update the Granim instance whenever the gradients change
   */
  useEffect( () => {
    granimRef.current?.changeState( 'default-state' )
  }, [gradients] )

  return (
    <canvas
      ref={canvasRef}
      id="granim-canvas"
      style={
        {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }
      }
    />
  )
}

export default GradientBackground
