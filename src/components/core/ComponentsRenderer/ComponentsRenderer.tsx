import HomeHero from '@/components/sections/HomeHero'
// import BodyText from '@/components/sections/BodyText'

import { EnumComponents, IComponents } from './ComponentsRendererTypes'

/**
 * This wrapper component can be used on all pages that
 * need to render a list of components.
 * @returns All the components mapped out based on type.
 */
const ComponentsRenderer = ({ components }: IComponents) => {
  return (
    <>
      {components?.map((data) => {
        switch (data?._type) {
          case EnumComponents.HomeHero:
            return <HomeHero key={data._key} data={data} />
          // case EnumComponents.BodyText:
          //   return <BodyText key={data._key} data={data} />
          default:
            return null
        }
      })}
    </>
  )
}

export default ComponentsRenderer
