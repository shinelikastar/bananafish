# from gensim import word2vec
from collections import Counter
import gzip
import logging
import re
import string

#logging.basicConfig(format=%(asctime)s : %(levelname)s : %(message)s’, level=logging.INFO)

corpus = open('gatsby.txt', encoding='utf8').read().lower()
corpus = corpus.translate(string.punctuation)
# remove punctuation
text_lst = re.split('\s|(?<!\d)[.]|[.](?!\d)', corpus)
# remove empty list
clean_text = [x for x in text_lst if x] 

# key: word, val: number of occurrences
c = Counter()

color_list = ['red', 'orange', 'yellow', 'green', 'blue', 'purple',
				'black', 'white', 'dark', 'grey', 'pale',
				'pink', 'blush'] 

for line in clean_text:
	for word in line.split():
		if word in color_list:
			c[word] += 1
#print(c)

total_colors = sum(c.values())

for color in color_list:
	print('%s %f' % (color, (c[color] / total_colors)))

# find sum
# total_colors = sum(Counter(color_list))
if __name__ == '__main__':
	if len(sys.argv) < 2:
		print('let me chew on [some words]... \ni.e. markov2.py [speeches.txt]')
	else:
		Prompt().cmdloop()