fx_version 'cerulean'
game 'gta5'

name "adam_characterinfo"
description "Character information menu"
author "Adam"
version "1.0"

shared_scripts {
	'@es_extended/imports.lua',
	'configs/config.lua',
}

client_scripts {
	'client/*.lua'
}

server_scripts {
	'@mysql-async/lib/MySQL.lua',
	'server/*.lua'
}


ui_page 'ui/index.html'

files {
    'ui/**'
}