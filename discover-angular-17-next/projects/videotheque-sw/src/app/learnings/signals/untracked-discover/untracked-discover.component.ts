import { Component, computed, effect, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-untracked-discover',
  standalone: true,
  imports: [],
  templateUrl: './untracked-discover.component.html',
  styleUrl: './untracked-discover.component.css'
})
export class UntrackedDiscoverComponent {
  surname = signal<string>('Chewie')
  name = signal<string>('No name')
  counter = signal<number>(0)

  monEffect = effect(() => {
    console.info('je m\'abonne sur les signaux ?' + this.counter)
  })

  fullName = computed(() => {
    console.info('Appel de console, tout simple')
    return `[[ ${this.surname()} //> ${untracked(this.name)}]]`
  })

  info = computed(() =>
    `
      ${this.surname()} click ${untracked(this.counter)}
    `
  )

  updateName(): void {
    this.name.set('Moto')
  }

  updateSurname(): void {
    this.surname.set('Hello !')
  }

  increment(): void {
    this.counter.set(this.counter() + 1)
  }
}
