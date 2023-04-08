import { useCallback } from 'react'
import { loadFull } from 'tsparticles'
import TsParticles from 'react-tsparticles'
import type { ISourceOptions, Container, Main } from 'tsparticles-engine/types/'

export type PropTypes = {
  options: ISourceOptions
}
const Particles = ({ options, ...props }: PropTypes) => {
  const init = useCallback(async (engine: Main) => {
    await loadFull(engine)
  }, [])

  // const loaded = useCallback(async (container?: Container) => {
  //   await console.log(container)
  // }, [])

  return (
    <TsParticles
      init={init}
      //loaded={loaded}
      options={options}
      {...props}
    />
  )
}

export default Particles
