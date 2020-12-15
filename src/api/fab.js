import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import React from 'react';
import { IonContent, IonHeader, IonFooter, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';

import './themes/variables.css';


class fab extends Component {
render() {
   return (
        <IonPage>
      <IonContent>
        {/*-- fab placed to the top end --*/}
        <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        
<IonFab vertical="center" horizontal="center" slot="fixed">
          <IonFabButton>
            <IonIcon icon={share} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton><IonIcon icon={logoVimeo} /></IonFabButton>
          </IonFabList>
          <IonFabList side="bottom">
            <IonFabButton><IonIcon icon={logoFacebook} /></IonFabButton>
          </IonFabList>
          <IonFabList side="start">
            <IonFabButton><IonIcon icon={logoInstagram} /></IonFabButton>
          </IonFabList>
          <IonFabList side="end">
            <IonFabButton><IonIcon icon={logoTwitter} /></IonFabButton>
          </IonFabList>
        </IonFab>

      </IonContent>
    </IonPage>

      );
}
}

export default fab;