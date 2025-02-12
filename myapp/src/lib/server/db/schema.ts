import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const characterTypeEnum = ['양자', '물리', '바람', '불', '허수', '번개', '얼음'] as const;
export type CharacterType = (typeof characterTypeEnum)[number];
export const characterPathEnum = ['파멸', '수렵', '지식', '화합', '공허', '보존', '풍요', '기억'] as const;
export type CharacterPath = (typeof characterPathEnum)[number];


export const character = sqliteTable('character', {
    id: integer('id').primaryKey(),
    kr: text('kr').notNull(),
    rarity: integer('rarity').notNull(),
	hp: integer('hp').notNull(),
	atk: integer('atk').notNull(),
	def: integer('def').notNull(),
	spd: integer('spd').notNull(),
	tnt: integer('tnt').notNull(),
	maxEne: integer('maxEne'),
	type: text('type', {mode: 'json' }).$type<CharacterType>().notNull(),
	path: text('path', {mode: 'json' }).$type<CharacterPath>().notNull(),
	camp: text('camp'),
});
