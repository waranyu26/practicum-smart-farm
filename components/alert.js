import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

const Alert = ({ preview }) => {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-white border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this web is{' '}
              <a
                href={`https://github.com/waranyu26/practicum-smart-farm`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Alert
