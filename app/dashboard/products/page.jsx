import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Search from '@/app/ui/dashboard/search/search'
import Pagination from '@/app/ui/dashboard/pagination/pagination'

import { fetchProducts } from '@/app/lib/data'
import { deleteProduct } from '@/app/lib/actions'

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, milds } = await fetchProducts(q, page);


    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Procure por um Milds"/>
          <Link href="/dashboard/products/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Quest</td>
              <td>Local</td>
              <td>LAT</td>
              <td>Long</td>
              <td>Created At</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
          {milds.map(milds => (
            <tr key={milds.id}>
              <td>
                <div className={styles.product}>
                <Image
                    src={milds.img || "/mosquito.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {milds.title}
                </div>
              </td>
              <td>{milds.desc}</td>
              <td>{milds.lat}</td>
              <td>{milds.long}</td>
              <td>{milds.createdAt?.toString().slice(4, 16)}</td>
              <td>
                  
                  <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${milds.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name='id' value={milds.id} />
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                  </form>
                  </div>
                </td>
            </tr>
             ))}
          </tbody>
        </table>
        <Pagination  count={count}/>
      </div>
    )
  }
  
  export default ProductsPage