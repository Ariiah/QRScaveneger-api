exports.seed = function(knex, Promise) {
		return knex('companies').del()
		.then(function() {
			return Promise.all([
  			knex('companies').insert([
  				{id: 1, name: 'Carimus', hint: 'hint 1'},
  				{id: 2, name: 'CE Broker', hint: 'hint 2'},
  				{id: 3, name: 'Cognizant Accelerator', hint: 'hint 3'},
					{id: 4, name: 'EmergeTMS', hint: 'hint 4'},
					{id: 5, name: 'Galvanize', hint: 'hint 5'},
					{id: 6, name: 'Hype Innovation', hint: 'hint 6'},
					{id: 7, name: 'IMBA', hint: 'hint 7'},
					{id: 8, name: 'Jujotech', hint: 'hint 8'},
					{id: 9, name: 'Lacuna', hint: 'hint 9'},
					{id: 10, name: 'Launch Forth', hint: 'hint 10'},
					{id: 11, name: 'Lauth Investigations', hint: 'hint 11'},
					{id: 12, name: 'Leomo', hint: 'hint 12'},
					{id: 13, name: 'Lumo', hint: 'hint 13'},
					{id: 14, name: 'Radiant', hint: 'hint 14'},
					{id: 15, name: 'SoundHound', hint: 'hint 15'},
					{id: 16, name: 'TyVac', hint: 'hint 16'},
					{id: 17, name: 'Unself', hint: 'hint 17'},
					{id: 18, name: 'Whistler', hint: 'hint 18'}
  			])
  			.then(() => {
  				return knex.raw("SELECT setval('companies_id_seq', (SELECT MAX(id) FROM companies))")
  			})
      ])
		})
}
