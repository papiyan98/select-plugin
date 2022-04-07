import { Select } from "./select/select";
import './select/styles.scss'

let value

const select = new Select('#select', {
  placeholder: 'Select technology',
  selectedId: value || null,
  data: [
    {id: '1', value: 'React'},
    {id: '2', value: 'Angular'},
    {id: '3', value: 'Vue'},
    {id: '4', value: 'React Native'},
    {id: '5', value: 'Next'},
    {id: '6', value: 'Nest'}
  ],
  onSelect(item) {
    document.querySelector('.show__selected').innerHTML = `Selected item: ${item.value}`
  }
})

document.querySelector('.open').addEventListener('click', () => {
  select.open()
})

document.querySelector('.close').addEventListener('click', () => {
  select.close()
})

document.querySelector('.set__selected').addEventListener('click', () => {
  select.select('2')
})

document.querySelector('.get__selected').addEventListener('click', () => {
  document.querySelector('.show__selected').innerHTML = `Selected item: ${select.current.value}`
})

document.querySelector('.clear').addEventListener('click', () => {
  document.querySelector('.show__selected').innerHTML = ''
  select.clear()
})

document.querySelector('.destroy').addEventListener('click', () => {
  select.destroy()
})