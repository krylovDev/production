import {ResolveOptions} from 'webpack'

export function buildResolvers(): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'], // Расширения тех файлов при импорте, которых, мы не будем указывать расширение @example import Component from './component'
	}
}
