import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from '../../firebase/client';
import ItemList from '../../components/ItemList/ItemList';
import Loader from '../../components/Loader/Loader';

function ItemListContainer() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const itemsRef = categoryId
      ? query(collection(db, 'items'), where('categoryId', '==', categoryId), orderBy('title', 'asc'))
      : query(collection(db, 'items'), orderBy('categoryId', 'asc'), orderBy('title', 'asc'));

    const getItems = async () => {
      try {
        const data = await getDocs(itemsRef);
        const dataFiltrada = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setList(dataFiltrada);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    getItems();
  }, [categoryId]);

  if (loading) {
    return <Loader message={'Cargando catálogo...'} />;
  } else {
    return <ItemList list={list} />;
  }
}

export default ItemListContainer;
