export default {
  name: 'dish',
  type: 'document',
  title: 'Dish',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of the dish',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the dish',
    },
  ],
}
