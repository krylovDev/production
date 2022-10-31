import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency/model/types/currency';

export interface Profile {
	firstName?: string,
	lastName?: string,
	age?: number,
	currency?: Currency,
	country?: Country,
	city?: string,
	username?: string,
	avatar?: string
}

export interface ProfileSchema {
	data?: Profile
	form?: Profile // То, что изменял юзер
	isLoading: boolean
	error?: string
	readonly: boolean
}
