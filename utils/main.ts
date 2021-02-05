import Iressource from 'interfaces/Ressource'

export function ressourcesToTags(defaultRessources: Iressource[]) {
  let allTags: string[] = defaultRessources.reduce(reducer, [])

  allTags = ['Toutes les ressources'].concat(allTags)

  return allTags
}

function reducer(accumulator: string[], currentValue: Iressource) {
  const foo: string[] = currentValue.tags.filter((item: any) => {
    const num: number = accumulator.indexOf(item)
    return num < 0
  })

  const tagList = accumulator.concat(foo)
  return tagList
}
