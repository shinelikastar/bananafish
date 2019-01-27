# ColoringBooks

Look here for our attempt to find the colors of stories through text analysis: 

https://shinelikastar.github.io/bananafish/

Use the sidebar to navigate, and see how different works of literature fit along the color spectrum.
Website written in html/css/java script, with texts taken from Project Gutenberg and other online 
sources. Text analysis done in python, making use of both traditional methods and word2vec.

Built by Bethany, Star, Zachary, and Katherine for Hack@Brown 2019.  


#Structure

story.txt files: complete copies of each story
story-colors.txt files: produced by a python script, contain space separated data in the form of 
  alternating color names and frequency (in percents).
story-neighbors files: produced by a python script using word2vec, contain line break separated data
  representing the nearest neighbors of each color according to a word2vec model trained on the 
  story.txt file for the story in question. Each line consists of space separated data: first a 
  color and then the ten nearest neighbors.
