exports.seed = function(knex, Promise) {
		return knex('companies').del()
		.then(function() {
			return Promise.all([
  			knex('companies').insert([
  				{id: 1, name: 'Carimus', hint: 'hint 1'},
					{id: 2, name: 'Hype Innovation', hint: 'hint 6'},
					{id: 3, name: 'IMBA', hint: 'hint 7'},
					{id: 4, name: 'Jujotech', hint: 'hint 8'},
					{id: 5, name: 'Launch Forth', hint: 'hint 10'},
					{id: 6, name: 'Lauth Investigations', hint: 'hint 11'},
					{id: 7, name: 'Lumo', hint: 'hint 13'},
					{id: 8, name: 'SoundHound', hint: 'hint 15'},
					{id: 9, name: 'Unself', hint: 'hint 17'},
					{id: 10, name: 'Whistler', hint: 'hint 18'}
  			])
  			.then(() => {
  				return knex.raw("SELECT setval('companies_id_seq', (SELECT MAX(id) FROM companies))")
  			})
      ])
		})
}
