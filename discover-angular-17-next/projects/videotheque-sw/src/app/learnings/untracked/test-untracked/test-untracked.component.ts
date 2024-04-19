import { Component, computed, effect, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-test-untracked',
  standalone: true,
  imports: [],
  templateUrl: './test-untracked.component.html',
  styleUrl: './test-untracked.component.css'
})
export class TestUntrackedComponent {
  name = signal("Al")
  lastName = signal("Test")

  fullName = computed(() => {
    console.info('computed ?')
    return this.name() + " " + untracked(this.lastName)
  })

  changeName(): void {
    this.name.set('ah')
  }

  changeSurname(): void {
    this.lastName.set('bh')
  }

  increment(): void {
    this.counter.set(this.counter() + 1)
  }

  counter = signal(0)

  info = computed(
    () =>
      `The name is now "${this.name()}" and the
      counter value was ${untracked(this.counter)} when
      the name changed.`
  )

  constructor() {
    effect(() => {
      console.log('Count effect invoked ' + this.counter);
    });
  }
}
