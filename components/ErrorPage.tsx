import * as React from 'react'


import { PageHead } from './PageHead'
import styles from './styles.module.css'

export const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  const title = 'Error'

  return (
    <>
      <PageHead title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Error cargando página</h1>

          {statusCode && <p>Código de error: {statusCode}</p>}

          <img src='/error.png' alt='Error' className={styles.errorImage} width={500} />
        </main>
      </div>
    </>
  )
}
