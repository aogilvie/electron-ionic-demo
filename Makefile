##
# Makefile
# description     : Makefile to install this project and its dependencies along with other helpers
# author          : Ally Ogilvie
##

# Set default shell
SHELL = /bin/bash

# Function for help
define helpText

######################################
###           Makefile             ###
######################################

make deps                              Install project dependencies
make start                             Start node
make clean                             Clean up

make test                              Runs all tests (lint)

endef
export helpText

##
# Utility Targets
##

# List of target which should be run every time without caching
.PHONY: deps start test clean

# Default make target
%::
	@echo "$$helpText"
Default :
	@echo "$$helpText"

# Deps target
deps :
	npm install

test :
	lint .

start :
	./node_modules/.bin/electron .

clean :
	rm -rf ./node_modules
