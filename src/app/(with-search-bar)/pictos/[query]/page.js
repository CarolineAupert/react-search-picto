import { PictoApi } from '@/components/api/PictoApi';
import PictoResults from '@/components/search/PictoResults';

export default async function PictosSearchPage ({ params })  {

  const searchValue = params.query;
  const pictos = await PictoApi.indexByQuery(searchValue);
  return (
    <>
      <h2>Pictos trouvés pour le terme : {searchValue}</h2>
      <PictoResults pictos={pictos} noDataMessage= {`Nous n'avons trouvé aucun picto pour le terme : ${searchValue}`}></PictoResults>
    </>
  )
}