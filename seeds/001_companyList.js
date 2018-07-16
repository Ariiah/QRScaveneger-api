exports.seed = function(knex, Promise) {
		return knex('companies').del()
		.then(function() {
			return Promise.all([
  			knex('companies').insert([
  				{id: 1, name: 'looker', hint: 'hint 1'},
  				{id: 2, name: 'TyVac', hint: 'hint 2'},
  				{id: 3, name: 'Galvanize', hint: 'hint 3'}
  			])
  			.then(() => {
  				return knex.raw("SELECT setval('companies_id_seq', (SELECT MAX(id) FROM companies))")
  			})
      ])
		})
}
