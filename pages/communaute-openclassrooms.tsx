import DiscordServers from 'components/DiscordServers'
import Seo from 'components/utils/seo'
import CommonLayout from 'layout/common'

export default function OpenclassroomsCommunity() {
  return (
    <CommonLayout >
        <div className="my-wrapper">
          <Seo
            title='devs.coffee - Communautés officieuses Openclassrooms (Discord, Facebook, Slack...)'
            description="Communautés Discord, Facebook et Slack officieuses pour tous les parcours (généraliste, développeur web / front-end / python, data, product manager ) d'Openclassrooms."
            bannerSuffix='/devs-coffee.png'
            pageSuffix='/communaute-openclassrooms'
          />
          <DiscordServers />
        </div>
    </CommonLayout>
  )
}
