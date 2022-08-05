import Ressources from 'components/Ressources'
import Seo from 'components/utils/seo'
import CommonLayout from 'layout/common'

export default function RessourcesPage() {
  return (
    <CommonLayout>
      <div className="my-wrapper">
        <Seo
          title='devs.coffee - Ressources'
          description="Liste courte et pertinente de ressources essentiels à tout développeur web. Ces sites sont particulièrements pertinents en complément des ressources Openclassrooms lors du parcours développeur web."
          bannerSuffix='/devs-coffee.png'
          pageSuffix='/ressources'
        />
        <Ressources />
      </div>
    </CommonLayout>
  )
}
