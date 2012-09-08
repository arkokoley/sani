(function() {
var classes = (function(){
	var add = function( el, className, force ) {
		if ( force || !has( el, className ) ) el.className += ' ' + className
		},
		has = function( el, className ) {
			var re = RegExp( '\\b' + className + '\\b' )

			return re.test(el.className)

		},
		remove = function( el, className, force ) {
			var re

			if ( force || has( el, className ) ) {
				re = RegExp( '\\b' + className + '\\b' )

				el.className = el.className.replace(re, '')
			}
		},
		toggle = function( el, className ) {
			if ( has( el, className ) ) {
				remove( el, className, true )
			} else {
				add( el, className, true )
			}
		}

	return {
		add: add,
		has: has,
		remove: remove,
		toggle: toggle
	}
}());

var addEvent = (function() {
	var queue = {},
		w3c = false,
		ie = false,
		add = function( el, event, fn ) {
			if ( !el || !event || !fn ) return

			var eventQ = queue[ event ]

			if (!eventQ) eventQ = queue[ event ] = {}

			if ( !eventQ[ el ] ) {

				eventQ[ el ] = [ fn ]

				if ( w3c ) {
					el.addEventListener( event, run, false)
				} else if ( ie ) {
					el.attachEvent( 'on' + event, run);
				} else {
					el['on' + event] = run;
				}
			// Already run before
			} else {
				eventQ[ el ].push( fn )
			}
		},
		run = function( event ) {
			var eventQ = queue[ event.type ][ this ],
				l = eventQ.length,
				i = 0

				for ( ; i < l; i++ ) {
					eventQ[ i ].apply(this, [ event ])
				}
		}

		if ( document.addEventListener ) {
			w3c = true
		} else if ( document.attachEvent ) {
			ie = true
		}

	return add
}());

// nav fixer
(function() {
	var onScroll = function() {
			if ( window.scrollY > 240 ) {
				classes.add( navBar, 'fixed' )
			} else {
				classes.remove( navBar, 'fixed' )
			}
		}

	if ( classes.has( document.body, 'home' ) && document.documentElement.clientWidth > 800 ) {
		var navBar = document.querySelector( '.page-nav' )

		addEvent( window, 'scroll', onScroll )
	}

}());
}());
