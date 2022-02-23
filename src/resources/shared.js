function hasSelectedInnerBlock(props) {
    const select = wp.data.select('core/block-editor');
    const selected = select.getBlockSelectionStart();
    const inner = select.getBlock(props.clientId).innerBlocks;
    for (let i = 0; i < inner.length; i++) {
        if (inner[i].clientId === selected || inner[i].innerBlocks.length && hasSelectedInnerBlock(inner[i])) {
            return true;
        }
    }
    return false;
}

export { hasSelectedInnerBlock }