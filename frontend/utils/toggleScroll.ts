const toggleScroll = (isDisableScroll: boolean) => {
  const html = document.querySelector('html') as HTMLElement
  if (isDisableScroll) {
    html.style.overflowY = 'hidden';
  } else {
    html.style.overflowY = 'unset';
  }
}

export default toggleScroll