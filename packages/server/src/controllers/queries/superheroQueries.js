const db = require('../../models');

module.exports.createSuperhero = async (data) => {
    const newSuperhero = await db.Superhero.create({
        nickname: data.nickname,
        real_name: data.realName,
        origin_description: data.originDescription,
        superpowers: data.superpowers,
        catch_phrase: data.catchPhrase,
        images: data.images
    })
    if(newSuperhero) return newSuperhero
    else throw new Error('cannot create superhero')
}

module.exports.getAllSuperheroes = async (params) => {
  const superheroes = await db.Superhero.findAll()
  return superheroes
}

module.exports.getSuperheroById = async (id) => {
  const superhero = await db.Superhero.findByPk(id)
  return superhero
}

module.exports.updateSuperhero = async (data, predicate) => {
  const updatedSuperhero = await db.Superhero.update({
    nickname: data.nickname,
    real_name: data.realName,
    origin_description: data.originDescription,
    superpowers: data.superpowers,
    catch_phrase: data.catchPhrase,
    images: data.images
  },{
      where: {
        id: predicate
    }, returning: true});
    return updatedSuperhero;
  }

module.exports.deleteSuperhero = async (predicate) => {
  const superhero = await db.Superhero.destroy({
    where: predicate,
  })
  return superhero
}
