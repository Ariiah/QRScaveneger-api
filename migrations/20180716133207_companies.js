exports.up = function(knex, Promise) {
	return knex.schema.createTable('companies', function(table) {
		// TABLE COLUMN DEFINITIONS HERE
		table.increments('id')
		table.string('name', 255).notNullable().defaultTo('')
		table.string('hint', 255).notNullable().defaultTo('')
		// table.string('colname3', 255).notNullable().defaultTo('')
		// table.timestamps(true, true)
		// OR
		// table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
		// table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
	})
}
exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('companies')
}
