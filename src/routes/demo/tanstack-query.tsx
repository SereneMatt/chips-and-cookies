import * as styles from '#/styles/tanstack-query.css'
import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/demo/tanstack-query')({
  component: TanStackQueryDemo,
})

function TanStackQueryDemo() {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: () =>
      Promise.resolve([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ]),
    initialData: [],
  })

  return (
    <main className={styles.page}>
      <section className={styles.panel}>
        <p className={styles.kicker}>TanStack Query</p>
        <h1 className={styles.title}>
          TanStack Query Simple Promise Handling
        </h1>
        <ul className={styles.list}>
          {data.map((todo) => (
            <li key={todo.id} className={styles.item}>
              <span className={styles.name}>{todo.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
