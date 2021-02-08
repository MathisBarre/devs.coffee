import * as ackeeTracker from 'ackee-tracker'

/**
 * Tracker is an singleton to track users with ackee-tracker
 */
export default class Tracker {
  private static selfInstance: Tracker
  private AckeeInstance

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {
    this.AckeeInstance = ackeeTracker.create('https://manialytics.herokuapp.com', {
      detailed: true,
      ignoreLocalhost: true,
      ignoreOwnVisits: false
    })
  }

  /**
   * The static method that controls the access to the singleton instance.
   */
  public static getInstance(): Tracker {
    if (!this.selfInstance) {
      this.selfInstance = new this()
    }

    return this.selfInstance
  }

  public record() {
    this.AckeeInstance.record('ffc71a4d-4120-468e-9820-5483e514699e', ackeeTracker.attributes(true))

    console.log('record !')
  }
}
