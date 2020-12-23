export function ressourcesToTags(defaultRessources) {
  let allTags
  allTags = defaultRessources.reduce((accumulator, currentValue) => {
    return accumulator.concat(
      currentValue.tags.filter((item) => accumulator.indexOf(item) < 0)
    )
  }, [])

  allTags = allTags.sort((a, b) => {
    //! Code magique qui marche sans que je sache pourquoi ????
    return (
      String.fromCharCode(parseInt(a, 16)) <
      String.fromCharCode(parseInt(b, 16))
    )
  })

  allTags = ['Toutes les ressources'].concat(allTags)

  return allTags
}