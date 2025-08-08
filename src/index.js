import kuromoji from 'kuromoji'

// Expose kuromoji in unsafeWindow for userscript access
if(typeof unsafeWindow !== 'undefined'){
	unsafeWindow.kuromoji = kuromoji
}
