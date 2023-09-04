import * as React from 'react'

import * as types from '@/lib/types'

import { PageHead } from './PageHead'
import styles from './styles.module.css'

export const Page404: React.FC<types.PageProps> = ({ site, pageId, error }) => {
  const title = site?.name || 'Página de Notion no encontrada'

  return (
    <>
      <PageHead site={site} title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.centerText}>Página no encontrada</h1>

          {error ? (
            <p>No se puedo encontrar esta página.</p>
          ) : (
            pageId && (
              <p>
                Asegúrate que la página &quot;{pageId}&quot; sea públicamente accesible.
              </p>
            )
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/404.png'
            alt='404 Not Found'
            className={styles.errorImage}
          />
        </main>
      </div>
    </>
  )
}
