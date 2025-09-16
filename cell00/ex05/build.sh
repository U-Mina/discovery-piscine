#! /bin/bash

if [ $# -eq 0 ]; then
	echo "No arguments supplied"
else
	for arg in "$@"; do
		dir="ex$arg"
		if [ -d "$dir" ]; then
			echo "Dir '$dir' already exists. Skip"
		else
			mkdir "$dir"
		fi
	done
fi