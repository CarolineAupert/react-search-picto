import { PictoApi } from '@/components/api/PictoApi';
import PictoResults from '@/components/search/PictoResults';

export default async function App() {
  const nbNewPictosToShow = 20;
  const pictos = await PictoApi.indexByLast(nbNewPictosToShow);

  return (
    <>
      <h2>Derniers pictos ajoutés</h2>
      <PictoResults pictos={pictos} noDataMessage="Aucun picto ajouté récemment."></PictoResults>
    </>
  )
}