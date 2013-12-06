This package lets you read directly in the console *and* print the texts published on [The Pastry Box Project](http://the-pastry-box-project.net).

# Install

`$ npm install -g node-pastrybox`

# Arguments

## Read the most recent text
`$ pastrybox today`

Returns the text published today.

## Read a specific text
`$ pastrybox day 21-10-2012`

Retuns the text published on October the 21st, 2012.

## Read texts based on a range
`$ pastrybox from 21-10-2012 to 21-11-2012`

Returns the texts published from October the 21st to November the 21st, 2012.

## Read "n" previous texts
`$ pastrybox day 21-10-2012 previous 7`

Returns the text published on October the 21st, and the seven texts published right before that date.


## Read "n" next texts
`$ pastrybox day 21-10-2012 next 7`

Returns the text published on October the 21st, and the seven texts published right after that date.

## Read texts from a specific author
`$ pastrybox baker lea-verou`

Returns the texts published by Lea Verou.

## Print

Any response can be turned into a PDF file. Just add the `print` argument to your command.

	$ pastrybox today print
	$ pastrybox day 21-10-2012 print
	$ pastrybox from 21-10-2012 to 21-11-2012 print
	...

*PDF files are always created in the current working directory.*

### File names

By default, a .pdf file is named based on the following scheme: pastrybox-$timestamp.pdf

You can override this behavior by specifying your own file name:

	$ pastrybox today print file "today.pdf"
	$ pastrybox day 21-10-2012 print file super-thought.pdf
	$ pastrybox from 21-10-2012 to 21-11-2012 print file "cool-stuff"
	...

As you can see, you can ommit the .pdf file extension. It will automatically be added. Double quotes are also optional.