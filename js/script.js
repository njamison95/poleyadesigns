alert("hello");

document.body.addEventListener("click", (ev) => {
	const isExpandableTitle = !!ev.target.closest(".expandable-title-bar");
	const expandable = ev.target.closest(".expandable");

	if (!isExpandableTitle) {
		return;
	}

	expandable.classlist.toggle("expandable-open");
});