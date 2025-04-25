import { Button } from './button'

interface PaginationProps {
  page: number
  totalPages: number
  onPageChange: (newPage: number) => void
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex gap-3 justify-between">
      <Button isDisabled={page === 1} onClick={() => onPageChange(page - 1)}>
        Prev Page
      </Button>
      <Button
        isDisabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next Page
      </Button>
    </div>
  )
}
