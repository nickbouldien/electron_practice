
const el = document.querySelector('#clickme');
// console.log(el);

el.addEventListener('click', () => {

	console.log('nick');
});

// el.addEventListener('activeTabChange', ({ detail }) => console.log('Active tab changed', detail.tabEl))

const chromeTabs = new ChromeTabs()
chromeTabs.init(el, {
	tabOverlapDistance: 14,
	minWidth: 45,
	maxWidth: 243
})


document.querySelector('#newTab').addEventListener('click', function(){
	chromeTabs.addTab({
		title: 'New Tab',
		// favicon: 'demo/images/default-favicon.png'
	})
});
