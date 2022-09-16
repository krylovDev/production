import {ResolveOptions} from 'webpack'
import {BuildOptions} from './types/config'

export function buildResolvers(options: BuildOptions): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'], // Расширения тех файлов при импорте, которых, мы не будем указывать расширение @example import Component from './component'
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {}
	}
}
