// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	// Your custom configs here
	{
		rules: {
			'prefer-arrow-callback': 'error',
			'vue/multi-word-component-names': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'sort-imports': [
				'error',
				{
					ignoreCase: true,
					ignoreDeclarationSort: true,
				},
			],
			'import/order': [
				1,
				{
					groups: [
						'external',
						'builtin',
						'internal',
						'sibling',
						'parent',
						'index',
					],
					pathGroups: [
						{
							pattern: 'components',
							group: 'internal',
						},
						{
							pattern: 'common',
							group: 'internal',
						},
						{
							pattern: 'routes/ **',
							group: 'internal',
						},
						{
							pattern: 'assets/**',
							group: 'internal',
							position: 'after',
						},
					],
					pathGroupsExcludedImportTypes: ['internal'],
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
		},
	}
);
