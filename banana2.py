from cmd import Cmd
from collections import Counter
import gzip
import logging
import re
import string
import sys

class Prompt(Cmd):

	prompt = '\n--> '

	if len(sys.argv) < 2:
		pass
	else:
		try:
			corpus = open(sys.argv[1:][0], encoding='utf8').read().lower()
			corpus = corpus.translate(string.punctuation)
		except IOError:
			print('let me chew on [some words]')

	color_list = ['red', 'orange', 'yellow', 'green', 'blue', 'purple',
				'black', 'white', 'dark', 'grey', 'pale',
				'pink', 'blush'] 

	def do_find_colors(self, args):
		text_lst = re.split('\s|(?<!\d)[.]|[.](?!\d)', self.corpus)
		clean_text = [x for x in text_lst if x] 

		# key: word, val: number of occurrences
		c = Counter()

		for line in clean_text:
			for word in line.split():
				if word in self.color_list:
					c[word] += 1

		total_colors = sum(c.values())

		for color in self.color_list:
			print('%s %f' % (color, (c[color] / total_colors)*100))

	def do_q(self, args):
		"""enter <q> to stop this madness """
		print('The End...')
		return True

	def do_quit(self, args):
		"""enter <quit> to stop this madness """
		print('The End...')
		return True


if __name__ == '__main__':
	if len(sys.argv) < 2:
		print('let me chew on [some words]...')
	else:
		Prompt().cmdloop()